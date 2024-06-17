import React from 'react'
import { Button, Stack, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                {/* here the href on insepcting the below button gives the anchor tag  */}
                <Button variant='text' href='https://google.com'>Text</Button>
                <Button variant='contained'>contained</Button>
                <Button variant='outlined'>outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>secondary</Button>
                <Button variant='contained' color='error'>error</Button>
                <Button variant='contained' color='warning'>warning</Button>
                <Button variant='contained' color='info'>info</Button>
                <Button variant='contained' color='success'>success</Button>
            </Stack>
            {/* in the stack display flex is default */}
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<SendIcon/>}>Send</Button>
                <Button variant='contained' endIcon={<SendIcon/>}>Send</Button>
                {/* Sometimes we only want the icon and not the button-icon , for that we use IconButton */}
                <IconButton aria-label='send'><SendIcon/></IconButton>
            </Stack>
        </Stack>
    )
}

export default MuiButton
