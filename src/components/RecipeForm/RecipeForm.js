import {Form, FormField} from './RecipeForm.styled'

export const RecipeForm = () =>{
    return(
        <Form>
            <FormField>
                Name
                <input type='text' name='name'/>
            </FormField>
            <FormField>
                Image
                <input type='text' name='image'/>
            </FormField>
            <FormField>
                Time
            <input type='number' name='time'/>
            </FormField>
            <FormField>
                Servings
                <input type='number' name='servings'/>
            </FormField>
            <FormField>
                Calories
                <input type='number' name='calories'/>
            </FormField>
            <FormField>
                Difficulty
                <select name="difficulty">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </FormField>
            <button type="submit">Save recipe</button>
        </Form>
    )
}