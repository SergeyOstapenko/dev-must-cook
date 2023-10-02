import { useState } from "react";
import styles from "./FilterMenu.module.scss";
// import { FaSortDown } from "react-icons/fa";

export const FilterMenu = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = useState("");


  const handleInputChange = (e) => {
    
    setSearchQuery(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Предотвращение перезагрузки страницы
    // Действия при отправке формы, например, выполнение поиска
    onSearch(searchQuery);
  };

  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     onSearch(searchQuery);
  //   }
  // };

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };
  return (
    <div className={styles.filter_container}>
      <form className={styles.formSearch} action="" onSubmit={handleSubmit}>
        <input
          name="query"
          className={styles.input}
          type="text"
          placeholder="Обрати рецепт..."
          value={searchQuery}
          onChange={handleInputChange}
          // onKeyPress={handleKeyPress} // Обработчик события клавиатуры
        />
        <button className={styles.formBtn} onClick={handleSearchClick}>
          Знайти
        </button>
      </form>
    </div>
  );
};
