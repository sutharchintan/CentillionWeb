import { isMobile } from "react-device-detect";
/**
 * table styles
 * @param theme 
 */
export const borderStyles = theme => ({
   
    
   
    borderHover: {
        
        "&:hover":{
            cursor:"pointer",
            backgroundColor:"rgb(66, 179, 219)",
            color:"rbg(255, 255, 255)",}
      },
   
      imagePerfect:{
        height: 250, 
        width: "100%",
         borderRadius: "100%",
         transition: "transform .2s",
         margin: "0px auto",
         "&:hover":{
            transform: "scale(1.1)"
         }
      },

      svgIconDashboard:{
          color:"white[500]",
          "&:hover":{
              color:"green[500]"
          }
      },
    //   root: {
    //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //     border: 0,
    //     borderRadius: 3,
    //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    //     color: 'white',
    //     padding: '0 30px',
    //   },
    //   "&:hover":{
    //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
       
    //   }
  });
  