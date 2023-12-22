import { 
    Card as CardMUI,
    CardActions,
    CardMedia,
    Typography,
    CardContent,
    styled,
} from "@mui/material"

const StyledCardMedia = styled(CardMedia)(() => ({
    paddingTop: '56%',
}))

const Card = ({ image, title, subtitle, actions }) => {
    return (
        <CardMUI>
            <StyledCardMedia 
                image={image}
                title={title}
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography>
                    {subtitle}
                </Typography>
            </CardContent>
            {
                actions
                ? (
                    <CardActions>
                        {actions}
                    </CardActions>
                ) : null
            }
        </CardMUI>
    )
}

export default Card