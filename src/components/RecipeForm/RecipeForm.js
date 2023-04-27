import {Formik, Field} from 'formik';
import { nanoid } from 'nanoid';
import {FormField, Form, ErrorMessage} from './RecipeForm.styled';
import * as Yup from 'yup';

//  Валідація

const RecipeSchema = Yup.object().shape({
    name: Yup.string().required('Required Field!'),
    image: Yup.string().required('Required Field!'),
    time: Yup.number().positive('Must be >0!').required('Required Field!'),
    servings:Yup.number().positive('Must be >0!').required('Required Field!'),
    calories:Yup.number().positive('Must be >0!').required('Required Field!'),
    defficulty:Yup.string().oneOf(['easy','medium','required']).required('Required field!')
  });



export const RecipeForm = ({onSave}) =>{
    return(
        <Formik
        initialValues={{
            name: '',
            image: '',
            time: 0,
            servings:0,
            calories:0,
            defficulty:''
          }}

          validationSchema = {RecipeSchema}
          // сабміт форми


          onSubmit={values =>{
            console.log(values);
            onSave({...values, id:nanoid()});
          }} 
        >
            <Form>
            <FormField>
                Name
                <Field name='name'/>
                <ErrorMessage name='name' component='span'/>

            </FormField>
            <FormField>
                Image
                <Field name='image'/>
                <ErrorMessage name='image' component='span'/>
            </FormField>
            <FormField>
                Time
            <Field type='number' name='time'/>
            <ErrorMessage name='time' component='span'/>
            </FormField>
            <FormField>
                Servings
                <Field type='number' name='servings'/>
                <ErrorMessage name='servings' component='span'/>
            </FormField>
            <FormField>
                Calories
                <Field type='number' name='calories'/>
                <ErrorMessage name='calories' component='span'/>
            </FormField>
            <FormField>
                Difficulty
                <Field as='select' name="difficulty">
                    <ErrorMessage name='difficulty' component='span'/>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </Field>
            </FormField>
            <button type="submit">Save recipe</button>
        </Form>
        </Formik>
        
    )
}