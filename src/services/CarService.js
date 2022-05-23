import axios from "axios";

const CAR_API_BASE_URL = "http://localhost:8080/api/v1/cars"

class CarService {

    saveCar(car) {
        return axios.post(CAR_API_BASE_URL, car)
    }
    getCars(){
        return axios.get(CAR_API_BASE_URL)
    }

}

export default new CarService();