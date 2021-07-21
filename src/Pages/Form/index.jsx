import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver} from '@hookform/resolvers/yup';
import { Button, Grid, Paper, TextField, List, ListItemText, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    formContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      textAlign: 'center',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(30),
        height: theme.spacing(45),
      },
    },
    gridContainer: {
        width: '100vw',
        height: '100vh',
        justifyContent: 'Center',

    },
    button: {
        marginTop: '130px',
        position: 'absolute',
        left: '4rem',
        bottom: '2rem',
    },
    form: {
        marginTop: '10px',
        position: 'relative',

    },
    listItemText: {
        fontSize: '0.7rem',
    },
  }));

export default function Form ({setNewUser, setIsLoged, isLoged}) {
    const history = useHistory();
    const classes = useStyles();
  
    const formSchema = yup.object().shape({
        name: yup
        .string()
        .required('Nome obrigatório'),
        email: yup
        .string()
        .required('E-mail obrigatório'),
        password: yup
        .string()
        .required('Senha obrigatória'),
        confirmPassword: yup
        .string()
        .required('Confirme sua senha') ,
    })
    const { register, handleSubmit, formState: { errors, required } } = useForm({
        resolver: yupResolver(formSchema), 
    })
    const handleSubmitData = (data) => {
        setNewUser(data)
        setIsLoged(true)
        history.push('/home')
    }
    return(
        <Grid className={classes.gridContainer}container justifyContent="center" alignItems="center">
                <Paper className={classes.formContainer} elevation={3}>
                    <form className={classes.form} onSubmit={handleSubmit(handleSubmitData)} >
                        <TextField 
                            {...register('name')}
                            label='nome'
                            error = {errors.name? true : false}
                            helperText = {errors.name?.message}

                         />
                        <TextField
                            {...register('email')}
                            label='e-mail'
                            type='email'
                            error = {errors.email? true : false}
                            helperText = {errors.email?.message}
                        />
                        <TextField
                            {...register('password')}
                            error = {errors.password? true : false}
                            label='senha'
                            type='password'
                            helperText = {errors.password?.message}

                        />
                        <TextField
                            {...register('confirmPassword')}
                            error = {errors.confirmPassword? true : false}
                            label='confirmar senha'
                            type='password'
                            helperText = {errors.confirmPassword?.message}

                        />
                        <Button
                            type='subimit'
                            className= {classes.button}
                            variant="contained"
                            color="primary"
                        >
                            Registrar
                        </Button>
                    </form>
                </Paper>
        </Grid>
    )
}