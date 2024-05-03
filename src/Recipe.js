function Recipe({ recipe, index, deleteRecipe }) {
    const { name, cuisine, photo, ingredients, preparation } = recipe;
  
    return (
      <tr>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td>
          <img src={photo} />
        </td>
        <td>{ingredients}</td>
        <td>{preparation}</td>
        <td>
          <button name="delete" onClick={() => deleteRecipe(index)}>Delete</button>
        </td>
      </tr>
    );
  }
  
  export default Recipe;