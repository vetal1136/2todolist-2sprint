import {ChangeEvent, KeyboardEvent, useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddBoxIcon from '@mui/icons-material/AddBox'
import IconButton from '@mui/material/IconButton'
import Box from "@mui/material/Box";
import {filterButtonsContainerSx} from "./Todolist.styles";


type PropsType = {
	addItem: (title:string) => void
}

export const AddItemForm = ({addItem}: PropsType) => {

	const [title, setTitle] = useState('')
	const [error, setError] = useState<string | null>(null)

	const addItemHandler = () => {
		if (title.trim() !== '') {
			addItem(title.trim())
			setTitle('')
		} else {
			setError('Title is required')
		}
	}

	const changeItemHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.currentTarget.value)
	}

	const addItemOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
		setError(null)
		if (event.key === 'Enter') {
			addItemHandler()
		}
	}

	const buttonStyles={
		maxWidth: '30px',
		maxHeight: '30px',
		minWidth: '30px',
		minHeight: '30px',
		background:'red'
	}


	return (
		<Box sx={filterButtonsContainerSx}>
			{/*<input*/}
			{/*	className={error ? 'error' : ''}*/}
			{/*	value={title}*/}
			{/*	onChange={changeItemHandler}*/}
			{/*	onKeyUp={addItemOnKeyUpHandler}*/}
			{/*/>*/}

			<TextField
				id="outlined-basic"
				label="Enter a title"
				variant="outlined"
				value={title}
				onChange={changeItemHandler}
				onKeyUp={addItemOnKeyUpHandler}
				size='small'
				error={!!error}
				helperText={error}
			/>
			<IconButton onClick={addItemHandler} color={'primary'}>
				<AddBoxIcon />
			</IconButton>

			{/*<Button*/}
			{/*	variant="contained"*/}
			{/*	onClick={addItemHandler}*/}
			{/*	//size='small'*/}
			{/*	// style={buttonStyles}*/}
			{/*>+</Button>*/}
			{/*<Button title={'+'} onClick={addItemHandler}/>*/}
			{/*{error && <div className={'error-message'}>{error}</div>}*/}
		</Box>
	)
}


