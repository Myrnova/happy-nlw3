import Image from '../models/Image';
const url = `${process.env.IP_API}${process.env.PORT}`

export default {
    

    render(image: Image){
        return { 
            id: image.id,   
            url: `${url}/uploads/${image.path}`         
        }; 
    },

    renderMany(images: Image[]){ //[] mostra que sao mais de um
        return images.map(image => this.render(image))

    }
}