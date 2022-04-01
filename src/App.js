import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/form";
import Loading from "./components/loading";
import TodoList from "./components/todoList";
import Header from "./header";

function App() {
	const [openForm, setOpenForm] = useState(false);
	const [data, setData] = useState([]);
	const [isFetching, setIsFetching] = useState(true);
	const [isError, setIsError] = useState(null);
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get("http://localhost:5000/todo");
				setData(response.data);
				setIsFetching(false);
			} catch (error) {
				setIsFetching(false);
				return setIsError(error.message);
			}
		};
		getData();
	}, []);

	// Delete Data From Server
	const handleDelete = async (id) => {
		try {
			const response = await axios.delete(`http://localhost:5000/todo/${id}`);
			response.status === 200
				? setData(data.filter((data) => data.id !== id))
				: alert("Error delet data");
		} catch (error) {
			setIsError(error.message);
		}
	};

	// Put Data to The Server
	const submitData = async (todo) => {
		const response = await axios.post("http://localhost:5000/todo", todo);
		setData([...data, response.data]);
	};
	// Check Todo
	const handleCheck = async (id) => {
		
			const response = await axios.get(`http://localhost:5000/todo/${id}`);
      const update = {...response.data, note : !response.data.note} 
      const newData = await axios.put(`http://localhost:5000/todo/${id}`, update)
      setData(data.map((data)=> data.id === id ? {...data, note: newData.data.note} : data))
  }

	return (
		<div className='w-9/12 mx-auto bg-white my-7 py-5 rounded shadow-lg space-y-3'>
			<Header
				handleOpenForm={() => {
					setOpenForm(!openForm);
				}}
				openForm={openForm}
			/>
			{!openForm ? <></> : <Form submitData={submitData} />}
			{isFetching && <Loading />}
			{data && (
				<TodoList
					data={data}
					handleDelete={handleDelete}
					handleCheck={handleCheck}
				/>
			)}
			{isError && <h4>{isError}</h4>}
		</div>
	);
}

export default App;
