import {Form, FormField} from './RecipeForm.styled'

export const RecipeForm = () =>{
    return(
        <Form>
            <FormField>
                Name
                <input type='text' name='name'/>
            </FormField>
        </Form>
    )
}