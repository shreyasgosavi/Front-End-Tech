
interface basicCameraOperation {

    cameraMode :number,
    aspectRatio :number,
    gestures :boolean

}

class Instagram implements basicCameraOperation{

    constructor(public cameraMode :number,public aspectRatio :number,public gestures :boolean){

    }
}