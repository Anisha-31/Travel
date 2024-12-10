import React from 'react'
import { Grid2, Card, CardContent, Typography } from "@mui/material";
const Dashboards = () => {
  return (
    <div>



      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>
      <Grid2 container spacing={3}>
        {/* Card 1 */}
        <Grid2 item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h4">1,234</Typography>
            </CardContent>
          </Card>
        </Grid2>

        {/* Card 2 */}
        <Grid2 item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Revenue</Typography>
              <Typography variant="h4">$45,678</Typography>
            </CardContent>
          </Card>
        </Grid2>

        {/* Card 3 */}
        <Grid2 item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Active Projects</Typography>
              <Typography variant="h4">89</Typography>
            </CardContent>
          </Card>
        </Grid2>

        {/* Card 4 */}
        <Grid2 item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Pending Tasks</Typography>
              <Typography variant="h4">25</Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>



    </div>
  )
}

export default Dashboards
