import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Navigation from '../Components/Home/Navigation';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { output1, output2, output3, output4 } from '../redux/actions/tableActions';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const data = [
	{
		title: 'Report in Excel',
		desc: '(Course No., Title, Date, Time, Room list,\n No. of students in each room, No. of Invigilators Required, No. of Invigilators given)',
	},
	{
		title: 'Report in Excel',
		desc: '(Date, Time, Course, Course Title, Discipline,\n Name, Email, PSRN/ID No., Mobile, IC)',
	},
	{
		title: 'Report of Invigilator details for IC',
		desc: '(Name, Discipline, ID No., Contact)',
	},
	{
		title: 'Details of duties given for invigilators',
		desc: 'Grouped by IC, PhD, ME, TA\n(Date, Time, Course No. Course Title, Email, Mobile)',
	},
];

const Exports = () => {
	const dispatch = useDispatch();

	const table = useSelector((state) => state.table);
	const courseList = table.courseList;
	const invigilators = table.invigilators;

	const [course, setCourse] = useState('');
	const [invigilator, setInvigilator] = useState('');

	const handleChangeCourse = (e) => {
		setCourse(e.target.value);
	};

	const handleChangeInvigilator = (e) => {
		setInvigilator(e.target.value);
	};

	if (!table.id) {
		return <Redirect to="/" />;
	}

	return (
		<div>
			<Navigation />
			<Grid container justify="space-around" className="main-container">
				<Grid container xs={5} className="savedSchedule" justify="space-between" alignItems="center">
					<Grid item xs={8}>
						<Typography variant="body1">
							<Box fontWeight="fontWeightBold" marginBottom={1}>
								{data[0].title}
							</Box>
							<Box fontSize={14}>
								{data[0].desc.split('\n').map((text) => (
									<>
										{text}
										<br />
									</>
								))}
							</Box>
						</Typography>
					</Grid>
					<Grid item xs={3} className="mt-auto">
						<Button
							className="savedScheduleButton"
							variant="contained"
							color="primary"
							onClick={() => dispatch(output1())}
						>
							Export
						</Button>
					</Grid>
				</Grid>

				<Grid container xs={5} className="savedSchedule" justify="space-between" alignItems="center">
					<Grid item xs={8}>
						<Typography variant="body1">
							<Box fontWeight="fontWeightBold" marginBottom={1}>
								{data[1].title}
							</Box>
							<Box fontSize={14}>
								{data[1].desc.split('\n').map((text) => (
									<>
										{text}
										<br />
									</>
								))}
							</Box>
						</Typography>
					</Grid>
					<Grid item xs={3} className="mt-auto">
						<Button
							className="savedScheduleButton"
							variant="contained"
							color="primary"
							onClick={() => dispatch(output2())}
						>
							Export
						</Button>
					</Grid>
				</Grid>

				<Grid container xs={5} className="savedSchedule" justify="space-between" alignItems="center">
					<Grid item xs={8}>
						<Typography variant="body1">
							<Box fontWeight="fontWeightBold" marginBottom={1}>
								{data[2].title}
							</Box>
							<Box fontSize={14}>
								{data[2].desc.split('\n').map((text) => (
									<>
										{text}
										<br />
									</>
								))}
							</Box>
						</Typography>
						<FormControl fullWidth margin="dense">
							<InputLabel>Course</InputLabel>
							<Select value={course} onChange={handleChangeCourse}>
								{courseList.map((course) => (
									<MenuItem value={course.id} key={course.id}>
										{course.id}: {course.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={3} className="mt-auto">
						<Button
							className="savedScheduleButton"
							variant="contained"
							color="primary"
							onClick={() => dispatch(output3(course))}
						>
							Export
						</Button>
					</Grid>
				</Grid>

				<Grid container xs={5} className="savedSchedule" justify="space-between" alignItems="center">
					<Grid item xs={8}>
						<Typography variant="body1">
							<Box fontWeight="fontWeightBold" marginBottom={1}>
								{data[3].title}
							</Box>
							<Box fontSize={14}>
								{data[3].desc.split('\n').map((text) => (
									<>
										{text}
										<br />
									</>
								))}
							</Box>
						</Typography>
						<FormControl fullWidth margin="dense">
							<InputLabel>Invigilators</InputLabel>
							<Select value={invigilator} onChange={handleChangeInvigilator}>
								{invigilators.map((inv) => (
									<MenuItem value={inv.id} key={inv.id}>
										{inv.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={3} className="mt-auto">
						<Button
							className="savedScheduleButton"
							variant="contained"
							color="primary"
							onClick={() => dispatch(output4(invigilator))}
						>
							Export
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};
export default Exports;
