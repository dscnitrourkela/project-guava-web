import React from 'react';

// Libraries
import { makeStyles } from '@material-ui/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

// Components
import {
	ViewCertificateHeader,
	CustomTextInput,
	CustomButton
} from '../components';

// Assets
import json from '../assets/csvjson.json';


const ViewCertificate: React.FC = () => {
	const classes = useStyles();
	const history = useHistory();
	const [input, setInput] = React.useState('');
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(false);
	const jsonRef = React.useRef(json);

	const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	const handleSubmit = () => {
		setLoading(true);
		if (jsonRef.current) {
			let index = -1;
			const match = jsonRef.current.filter(({ Email }, id) => {
				if (Email === input) {
					index = id;
					return true;
				}

				return false;
			});

			if (match.length > 0) {
				const { Name: name, Email: email, "Team Name": teamName, Tag: tag } = match[0];
				const obj = {
					name,
					email,
					teamName,
					tag,
					certificateId: `HACKNITR3-P${index + 1}`
				}

				if (match[0]?.Prize) {
					// @ts-ignore
					obj["prize"] = match[0]?.Prize;
				}

				console.log(obj);

				history.push('/viewCertificate', obj)
			} else {
				setError(true);
			}

			setLoading(false);
		}
	};

	React.useEffect(() => {
		if (error) {
			setError(false)
		}
		// eslint-disable-next-line
	}, [input,])

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<ViewCertificateHeader />

				<h3 className={classes.title}>Enter your details</h3>
				<p className={classes.content}>Make sure to enter the email address with which you registerd for HackNITR 3.0</p>

				<CustomTextInput
					value={input}
					onChange={(e) => setInput(e.target.value)}
					variant="outlined"
					errorText="Required Field"
					validationRegex={regex}
					validationError="Invalid Email Address"
				/>

				{error && (
					<p className={classes.error}>Sorry, Email not found...</p>
				)}

				<CustomButton
					onClick={handleSubmit}
					loading={loading}
					setLoading={setLoading}
					className={classes.button}
					disabled={!regex.test(input)}
				>
					Get Certificate
				</CustomButton>
			</div>
		</div>
	);
};

export default ViewCertificate;

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		maxWidth: '100vw',
		minHeight: '100vh',
		backgroundColor: 'rgba(251, 252, 253, 1)',
		overflow: 'hidden',

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		width: '25%',
		minWidth: '100px',
		paddingBottom: '5rem',
	},
	title: {
		fontFamily: "'Source Serif Pro', serif",
		fontSize: '1.5rem',
		fontWeight: 600,
		marginBottom: '12px',
		marginLeft: '9px',
	},
	content: {
		fontFamily: '"Inter" ,"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: '0.9rem',
		fontWeight: 400,
		marginBottom: '12px',
		marginLeft: '9px',
	},
	button: {
		marginLeft: '9px',
		marginTop: '12px',
		width: '200px'
	},
	error: {
		color: '#f44336',
		fontFamily: '"Inter" ,"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: '0.9rem',
		fontWeight: 400,
		marginBottom: '12px',
		marginLeft: '9px',
	}
}));
