import {useState} from 'react'
const AddToDo = ({addtodo}) => {
    const [todo, setContent] = useState({
        content:''
    })

    const handleChange = (e) => {
        setContent ({content:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addtodo(todo)
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Add new todo:</label>
                <input type="text" onChange={(e) => handleChange(e)}/>
            </form>
        </div>
    )
}

export default AddToDo