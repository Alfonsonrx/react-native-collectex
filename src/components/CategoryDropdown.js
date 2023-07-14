import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list'

const colors = [
  '#f47022',
  '#7c3b1c',
  '#007ac9',
  '#ce9d53',
  '#ffea08',
  '#c41426',
]

const CategoryDropdown = (props) => {
  const { navigation, category } = props;
  const [selected, setSelected] = React.useState("");

  const subCategories = category.subcategories?.map((e) => (
    { key: e.id, value: e.name }
  ))

  const goToSubCategory = (id_subCategory) => {
    // console.log(props)
    navigation.navigate({
      name: 'SubCategory',
      params: { mainCategory: category.id, subCategory: id_subCategory },
    });
  }

  return (
    <SelectList
      setSelected={(val) => setSelected(val)}
      data={subCategories}
      save="key"
      onSelect={() => goToSubCategory(selected)}
      placeholder={category.name}
      search={false}
      notFoundText="No hay SubCategorias aun"
      boxStyles={{
        borderRadius: 4,
        height: 70,
        alignItems: 'center',
        marginTop: 15,
        borderWidth: 3,
        borderColor: colors[category.id - 1],
      }}
      inputStyles={{ fontSize: 20 }}
      dropdownTextStyles={{ fontSize: 15 }}
    />
  )
}

export default CategoryDropdown;