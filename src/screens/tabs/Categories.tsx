import React from 'react';
import { Text, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { text } from '../../text';
import { hooks } from '../../hooks';
import { custom } from '../../custom';
import { theme } from '../../constants';
import { actions } from '../../store/actions';
import { components } from '../../components';
import { queryHooks } from '../../store/slices/apiSlice';
import { AllCategories } from '../../constants/categories';



const Categories: React.FC = () => {
  const dispatch = hooks.useDispatch();

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
  const categories = categoriesData instanceof Array ? categoriesData : [];

  const allCategories = AllCategories


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
          <text.H2 style={{ textAlign: 'center', textTransform: 'capitalize' }}>
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
        {allCategories.map((item, index, array) => {
          const divisibleByThree = (index - 2) % 3 === 0;

          return (
            <components.CategoryItem
              item={item}
              key={item.name}
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
      {/* {renderTags()} */}
      {renderContent()}
      {renderBottomTabBar()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default Categories;
