function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/iKKzSMGxD/model.json', modelReady);

    function modelReady() {
        classifier.classify(gotResults);

    }

}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_no_r = Math.floor(Math.random() * 255) + 1;
        random_no_g = Math.floor(Math.random() * 255) + 1;
        random_no_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear : " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy : " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_no_r + "," + random_no_g + "," + random_no_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_no_r + "," + random_no_g + "," + random_no_b + ")";

        img = document.getElementById("animal");
      

        if (results[0].label == "Dog") {
            img.src = "https://images.theconversation.com/files/205966/original/file-20180212-58348-7huv6f.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop";
            
        }

        else if (results[0].label == "Cat") {
            img.src = "https://th.bing.com/th/id/OIP.TEX6gXdjs3ptMV9EjaR72QHaEK?pid=ImgDet&rs=1";
        
        }

        else if (results[0].label == "cow") {
            img.src = "https://www.abelandcole.co.uk/blog/images/default-source/acblogimages/Suppliers/brown-cow/325a4868.jpg?sfvrsn=d779a9cf_2";
           
        }
        else {
            img.src = "https://th.bing.com/th/id/OIP.ld859cFC74as0nkcPh2brQHaHa?pid=ImgDet&rs=1";
            

        }

    }
}