import React from 'react'
import { Typography } from '@mui/material';
// Typography - deals with style and apperance of text on your website 
// you can change the semantic elment using the prop
const MuiTypography = () => {
  return (
    <div>
      <Typography variant ='h1'>h1 Heading</Typography>
      <Typography variant ='h2'>h2 Heading</Typography>
      <Typography variant ='h3'>h3 Heading</Typography>
      {/* here the h4 element on inspecting shows h1  and gutterbottom has the space at the bottom*/}
      <Typography variant ='h4' component = 'h1' gutterBottom>h4 Heading</Typography>
      <Typography variant ='h5'>h5 Heading</Typography>
      <Typography variant ='subtitle1'>subtitle1 </Typography>
      <Typography variant ='subtitle2'>subtitle2 </Typography>
      {/* here the body1 is the default text type */}
      <Typography  variant ='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum error voluptas aperiam id sunt quos ipsam neque eveniet. Placeat soluta quis quo? Veniam dolores excepturi delectus error quaerat rem deserunt. </Typography>
      <Typography variant ='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur perspiciatis voluptatum necessitatibus quibusdam repellat perferendis iure et obcaecati consequatur architecto, laborum ipsam inventore quis laudantium nobis molestias vero nemo? </Typography>
    </div>
  )
}

export default MuiTypography
