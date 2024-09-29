import React from 'react';
import {Text, TouchableOpacity, ScrollView, Platform} from 'react-native';

import {text} from '../../text';
import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {actions} from '../../store/actions';
import {components} from '../../components';
import {queryHooks} from '../../store/slices/apiSlice';

const Categories: React.FC = () => {
  const dispatch = hooks.useDispatch();

  const {
    data: productsData,
    error: productsError,
    isLoading: productsLoading,
  } = queryHooks.useGetProductsQuery();

  const {
    data: tagsData,
    error: tagsError,
    isLoading: tagsLoading,
  } = queryHooks.useGetTagsQuery();

  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = queryHooks.useGetCategoriesQuery();

  const tags = tagsData instanceof Array ? tagsData : [];
  const products = productsData instanceof Array ? productsData : [];
  const categories = categoriesData instanceof Array ? categoriesData : [];

  const selectedTag = hooks.useSelector((state) => state.tagSlice.tag);

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return (
      <components.Header
        burger={true}
        basket={true}
        bottomLine={true}
        search={true}
      />
    );
  };

  const filteredCategories = () => {
    if (selectedTag === 'all') {
      return categories;
    }

    return categories.filter((item) => {
      return item.tags.includes(selectedTag);
    });
  };

  const filteredTags = () => {
    const allTags = tags.filter((item) => {
      return categories.some((category) => {
        return category.tags.includes(item.name);
      });
    });

    return [{id: 'all', name: 'all'}, ...allTags];
  };

  const renderTags = () => {
    if (tags.length > 0 && categories.length > 0) {
      return (
        <ScrollView
          contentContainerStyle={{paddingLeft: 20}}
          style={{flexGrow: 0, marginVertical: 20}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // decelerationRate={0}

          decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
          // pagingEnabled={Platform.OS === 'ios' ? true : false}
        >
          {filteredTags().map((item, index, array) => {
            const lastElement = index === array.length - 1;
            return (
              <TouchableOpacity
                key={item.id}
                style={{
                  height: 30,
                  paddingHorizontal: 18,
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderRadius: 30 / 2,
                  marginRight: lastElement ? 20 : 10,
                  borderColor: theme.colors.lightBlue,
                  backgroundColor:
                    item.name === selectedTag
                      ? theme.colors.lightBlue
                      : theme.colors.transparent,
                }}
                onPress={() => {
                  dispatch(actions.setTag(item.name));
                }}
              >
                <Text
                  style={{
                    textTransform: 'uppercase',
                    ...theme.fonts.Mulish_SemiBold,
                    fontSize: 12,
                    color: theme.colors.mainColor,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      );
    }

    return null;
  };

  const renderContent = () => {
    if (categoriesLoading || tagsLoading) {
      return <components.Loader />;
    }

    if (tags.length === 0 || categories.length === 0) {
      return (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 50,
          }}
        >
          <text.H2 style={{textAlign: 'center', textTransform: 'capitalize'}}>
            You have no tags or categories. Please, add them in the admin panel.
          </text.H2>
        </ScrollView>
      );
    }

    if (tagsError || categoriesError) {
      return (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 50,
          }}
        >
          <Text>Something went wrong. Please, try again later.</Text>
        </ScrollView>
      );
    }

    if (tags.length > 0 && categories.length > 0) {
      return <custom.SmartView>{renderCategories()}</custom.SmartView>;
    }
  };

  const renderCategories = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        {filteredCategories().map((item, index, array) => {
          const divisibleByThree = (index - 2) % 3 === 0;

          return (
            <components.CategoryItem
              item={item}
              key={item.id}
              products={products}
              divisibleByThree={divisibleByThree}
            />
          );
        })}
      </ScrollView>
    );
  };

  const renderBottomTabBar = () => {
    return <components.BottomTabBar />;
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };

  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      {renderTags()}
      {renderContent()}
      {renderBottomTabBar()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default Categories;
