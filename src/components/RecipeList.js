export const RecipeList = ({items})=>{ 
    return (
        <ul>
            {items.map((item ) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};