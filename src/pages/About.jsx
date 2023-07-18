import React from 'react';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Grid from '@mui/material/Grid';
import Vectors from '../components/brick.jpg';
import { grey } from '@mui/material/colors';

export default function About() {
  return (
    <>
     <div className='bgcolor'>
    <Navbar/>
     <Box height={30} />
     <Box sx={{ display: 'flex' }}>
       <Sidenav/>
       <Box component="main" sx={{ flexGrow: 1, p: 3 }}
                            color={'darkolivegreen'}
                            fontFamily={"Sora"}
                             >
           <Grid fontSize={'1.5rem'}>      
          <h1 >About Us</h1>
          </Grid>   
     
          <Grid color={'black'}
                fontSize={"1.2rem"}>
          
          <p>  Welcome to The Book Shelf! We are a premier book store dedicated to bringing you a wide array of captivating literature that spans across various genres. Whether you're a hopeless romantic, an avid fan of Hollywood, or simply seeking an engaging tale that will keep you on the edge of your seat, we have it all.</p>

         <p> At The Book Shelf, we take pride in curating a diverse collection of books that cater to different tastes and preferences. Our shelves are adorned with an extensive selection of love stories that will warm your heart, whisking you away to enchanting worlds where love conquers all. You'll find tales of star-crossed lovers, heartwarming rom-coms, and epic love sagas that will leave you breathless.</p>

         <p>For those who crave the excitement and glamour of Hollywood, we offer an extensive range of books that delve into the captivating world of the silver screen. Explore the lives of your favorite actors and actresses, discover behind-the-scenes secrets, or immerse yourself in thrilling fictional stories set in the glitz and glamour of Tinseltown.</p>

         <p> If you're a fan of humor, our shelves are brimming with witty and amusing titles that will tickle your funny bone. Lose yourself in humorous anecdotes, comedic novels, and satirical tales that are sure to brighten your day and leave you in stitches.</p>

         <p>For those seeking an adrenaline rush, our collection of suspense and horror books will transport you to spine-chilling realms filled with mystery, danger, and a sense of dread. Brace yourself for thrilling narratives, chilling plot twists, and unforgettable characters that will keep you up late into the night, eagerly turning the pages.</p>

         <p> At The Book Shelf, we are passionate about connecting readers with their next literary adventure. Our knowledgeable staff is always on hand to provide recommendations, assist with finding the perfect book, or engage in lively discussions about literature. We believe in fostering a warm and inviting atmosphere where book lovers can immerse themselves in the joy of reading.</p>

         <p> Whether you're a bookworm searching for your next favorite novel or a casual reader seeking a compelling story, The Book Shelf is your haven for all things literary. Step through our doors, explore our shelves, and embark on a journey that will captivate your imagination and touch your soul.</p>

         <p>Welcome to The Book Shelf, where every page holds a new world waiting to be discovered.</p>
          </Grid>

          <Grid>
          <Grid component="img"
                            sx={{
                                content: {
                                    xs: `url(${Vectors})`
                                }
                            }}
                            width={1060}
                            height={200}>
          </Grid> 
            <Grid color={grey}
                  marginTop={'-12rem'} 
                  textAlign={"center"}
                  fontWeight={800}
                  fontSize={'4rem'}>
                  
               The Bookshelf
            </Grid>  
          </Grid>
      
       </Box>
     </Box>
     </div>
    </>
  )
}