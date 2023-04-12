export const RecipeCard = ({item})=>{
    return(
        <div>
            <img src={item.image} alt={item.name} width="240"/>
            <h2>{item.name}</h2>
            <div style={{display: 'flex', gap: 3}}>
                <div>
                <span>icon</span>
                <p>{item.time} min</p>
                </div>
                <div>
                <span>icon</span>
                <p>{item.servings} servings</p>
                </div>
                <div>
                <span>icon</span>
                <p>{item.calories} calories</p>
                </div>
            </div>

            <div>
                <h3>Difficulty</h3>
                    <span>Easy</span>
                    <span>Medium</span>
                    <span>Hard</span>
            </div>
        </div>
    );
};