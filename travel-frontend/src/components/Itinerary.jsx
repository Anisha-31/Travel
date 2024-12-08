import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, CardActions, Button, Box } from "@mui/material";

const Itinerary = () => {
  const [itineraries, setItineraries] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  // Fetch Itineraries on Component Mount
  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/auth/get");
        setItineraries(response.data); // Update state with fetched data
        console.log(response.data); // Log to check structure
      } catch (err) {
        setError("Failed to load itineraries. Please try again later.");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchItineraries();
  }, []);

  const handleDelete = async (id) => {
  
    try {
      const response= await axios.delete(`http://localhost:8000/api/auth/delete/${id}`);
       alert('Itinerary deleted successfully');
      // Refresh or update UI here
    } catch (error) {
      console.error('Error deleting itinerary:', error.message);
    }

    // console.log('delte')
  };

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <h1>Welcome to Travel!</h1>

      {/* Render Itineraries */}
      {itineraries.length > 0 ? (
        itineraries.map((itinerary, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 400,
              boxShadow: 3,
              borderRadius: 2,
              p: 2,
              m: 2,
              backgroundColor: "#f5f5f5",
            }}
          >
            <CardContent>
              {/* Title */}
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {itinerary.title}
              </Typography>

              {/* Description */}
              <Typography variant="body2" color="text.secondary" paragraph>
                {itinerary.description}
              </Typography>

              {/* Date */}
              <Typography variant="subtitle2" color="text.secondary">
                <strong>Date: </strong>
                {new Date(itinerary.date).toLocaleDateString()}
              </Typography>
            </CardContent>

            {/* Action Buttons */}
            <CardActions>
              <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <Button size="small" variant="contained" color="primary">
                  Edit
                </Button>
                <Button size="small" variant="outlined" color="error"
                  onClick={() => handleDelete(itinerary._id)}>
                  Delete
                </Button>
              </Box>
            </CardActions>
          </Card>
        ))
      ) : (
        <h3>No itineraries found.</h3>
      )}
    </div>
  );
};

export default Itinerary;
