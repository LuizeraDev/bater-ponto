import { Button, Box, Container, Typography } from '@mui/material';
import Copyright from '../components/Copyright';
import Navbar from '../components/Navbar';
import Table from '../components/UsersTable';
import AddBoxIcon from '@mui/icons-material/AddBox';

function Colaborators() {
    return (
        <Box>
            <Navbar />
            {/* Main */}
            <Container maxWidth="md" component="main" sx={{ pt: 10 }}>
                <Typography
                    component="h1"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Meus Colaboradores
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        mt: 5,
                        mb: 5
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{ py: 0.6 }}
                        color="success"
                        href="/register"
                    >
                        <AddBoxIcon />&nbsp;Adicionar
                    </Button>
                </Box>
                <Table />
                {/* Footer */}
                <Container
                    maxWidth="md"
                    component="footer"
                    sx={{
                        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                        mt: 8,
                        py: [3, 6],
                    }}
                >
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </Container>
        </Box>
    );
}

export default Colaborators;