import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}) {
    const INIT_URL = "https://media.istockphoto.com/id/925877510/photo/four-seasons-of-year.webp?a=1&b=1&s=612x612&w=0&k=20&c=1Qci-fSHg-IFgJaBlhBnXsoctLhO9KNRkxnQZaXiJrA=";
    const HOT_URL = "https://plus.unsplash.com/premium_photo-1682535210542-21dceae4530c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1489674267075-cee793167910?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhaW58ZW58MHx8MHx8fDA%3D";
    // let info = {
    //     city: "Delhi",
    //     feelslike: 24.84,
    //     temp: 25.05,
    //     tempMin: 25.05,
    //     tempMax: 25.05,
    //     humidity: 47,
    //     weather: "haze",
    // }
    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 100 ? RAIN_URL : info.temp > 25 ? HOT_URL : COLD_URL}
        title="Weather Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 100 ? <ThunderstormIcon/> : info.temp > 25 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div>
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Minimum Temperature = {info.tempMin}&deg;C</p>
                <p>Maximum Temperature = {info.tempMax}&deg;C</p>
                <p>The Weather can be described as <i>{info.weather}</i> and it feels like {info.feelslike}&deg;C</p>
            </div>
        </Typography>
      </CardContent>
    </Card>
            </div>
        </div>
    )
}