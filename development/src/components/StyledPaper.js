import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const StyledPaper = withStyles((theme) => ({
    root: {
        padding: 10,
        margin: theme.spacing(10),
        padding: theme.spacing(10),
        paddingTop: 50,
        backgroundColor:"#ADD8E6",
        width:'25%',
        aligncontent: "flex-end"
}
}))(Paper);

export default StyledPaper;
