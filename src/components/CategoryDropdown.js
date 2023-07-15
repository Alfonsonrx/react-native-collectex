import React, {useState} from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from '@react-navigation/native';

const colors = [
  '#f47022',
  '#7c3b1c',
  '#007ac9',
  '#ce9d53',
  '#ffea08',
  '#c41426',
]

const CategoryDropdown = (props) => {
  const { category } = props;
  const [selected, setSelected] = useState("");
  const [reset, setReset] = useState(0);
  const navigation = useNavigation(); 

  const subCategories = category.subcategories?.map((e) => (
    { key: e.id, value: e.name }
  ))

  const clearStates = () => {
    setReset(reset + 1)
  };

  const goToSubCategory = (id_subCategory) => {
    // console.log(props)
    clearStates()
    navigation.navigate({
      name: 'SubCategory',
      params: { mainCategory: category.id, subCategory: id_subCategory, disabled: true  },
    });
  }

  return (
    <SelectList
      key={reset}
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