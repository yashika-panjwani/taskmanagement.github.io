import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTask, reset } from "../features/tasks/taskSlice";
import { toast } from 'react-toastify';

const TaskForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        priority: 1
    })

    const { title, description, priority } = formData;
    const { user } = useSelector(state => state.auth);
    const { isSuccess, isError, message } = useSelector(state => state.task);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }

        if (isError) {
            toast.error(message);
        }

        dispatch(reset());
    }, [user, navigate, isError, message, isSuccess])

    const onChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (priority < 1 || priority > 5) {
            toast.error('Priority must be between 1 and 5');
        } else if (title.length > 300) {
            toast.error('Maximum number of characters for the title is 300 ');
        } else {
            const taskData = {
                title,
                description,
                priority: parseInt(priority)
            }

            dispatch(createTask(taskData));
            toast.success('New task created');

            setFormData({
                title: '',
                description: '',
                priority: 1
            })
        }
    }

    return (
        <div className='flex justify-center min-h-screen bg-gray-200'>
            <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl h-3/4 mt-20'>
                <div className='max-w-md mx-auto space-y-6'>
                    <form onSubmit={onSubmit}>
                        <h2 className="text-2xl font-bold ">Add new task</h2>
                        <p className="my-4 opacity-70">Add a new task to help you keep track of your responsibilities and improve your organization.</p>
                        <hr className="my-4" />
                        <label className="uppercase text-sm font-bold opacity-70">Title</label>
                        <input type="text" className="p-1 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                            value={title}
                            onChange={onChange}
                            name="title"
                            required
                        />
                        <label className="uppercase text-sm font-bold opacity-70">Description</label>
                        <textarea rows={4} type="text" className="p-1 mt-2 mb-4 w-full bg-slate-200 rounded"
                            value={description}
                            onChange={onChange}
                            name="description"
                            required
                        />
                        <label className="uppercase text-sm font-bold opacity-70">Priority (1-5)</label>
                        <input type="number" className="p-1 mt-2 mb-4 w-full bg-slate-200 rounded"
                            value={priority}
                            onChange={onChange}
                            name="priority"
                            required
                        />
                        <button type="submit" className="mt-3 mx-auto block px-4 py-2 rounded-md bg-teal-500 text-white font-bold">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TaskForm;
