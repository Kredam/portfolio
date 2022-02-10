import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconButton, Typography, Avatar, Grid, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion';

const Card = () =>{

	const profCard = {
		hide: {opacity:0},
		visible: {opacity:1, transition:{duration:1}},
	}

	return(<Paper sx={{maxWidth:"500px", borderRadius:'90px', margin:"auto"}}>
			<Grid container sx={{marginTop: '180px'}} variants={profCard} component={motion.div}
						initial="hide" animate="visible">
				<Grid item sm={5}>
					<Avatar
						alt="Kreidli Ádám"
						src="./avatar.jpg"
						sx={{ width: 200, height: 200 , display:{xs:'none', sm:'block'}}}
					/>
				</Grid>
				<Grid item sm={7} container variants={profCard} component={motion.div}
						initial="hide" animate="visible">
					<Grid item xs container direction="column" justifyContent='center' alignItems='center'>
						<Grid item xs>
							<Typography sx={{fontSize:'18px', marginTop:'16px'}} align='center'>Kreidli Ádám</Typography>
							<Typography variant='subtitle2' sx={{marginTop:'5px'}} align='center'>CS Student</Typography>
						</Grid>
						<Grid item xs sx={{marginLeft:'25px'}}>
							{/* {brandFonts.map(item => {
								return <>

										</>
							})} */}
							<IconButton href='https://www.facebook.com/kreidli.adam/'
								color='info'
								edge='start'
								size='medium'
								component={motion.button}
								whileHover={{scale:1.2}}
								whileTap={{scale:0.8}}
								sx={{mr: 2}}>
								<FontAwesomeIcon icon={faFacebook}/>
							</IconButton>
							<IconButton
								color='info'
								edge='start'
								size='medium'
								component={motion.button}
								whileHover={{scale:1.2}}
								whileTap={{scale:0.8}}
								sx={{mr: 2}}>
								<FontAwesomeIcon icon={faLinkedin}/>
							</IconButton>
							<IconButton href='https://github.com/Kredam'
								color='info'
								edge='start'
								size='medium'
								component={motion.button}
								whileHover={{scale:1.2}}
								whileTap={{scale:0.8}}
								sx={{mr: 2}}>
								<FontAwesomeIcon icon={faGithub}/>
							</IconButton>
							<IconButton
								color='info'
								edge='start'
								size='medium'
								component={motion.button}
								whileHover={{scale:1.2}}
								whileTap={{scale:0.8}}
								sx={{mr: 2}}>
								<FontAwesomeIcon icon={faTwitter}/>
							</IconButton>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid>

			</Grid>
		</Paper>)
}

export default Card;