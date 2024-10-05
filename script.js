// Get elements from the DOM
const webcamElement = document.getElementById('webcam');
const captureButton = document.getElementById('captureButton');
const attendanceStatus = document.getElementById('attendanceStatus');

// Function to start webcam stream
async function startWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        webcamElement.srcObject = stream;
    } catch (error) {
        alert('Unable to access webcam: ' + error);
    }
}

// Simulate face recognition
function recognizeFace() {
    // List of Muslim names for students
    const students = [
        'Ahmed Ali', 
        'Fatima Khan', 
        'Hassan Malik', 
        'Ayesha Ahmed', 
        'Muhammad Usman', 
        'Zainab Bibi', 
        'Bilal Hussain', 
        'Sara Qureshi', 
        'Hamza Sheikh', 
        'Noor Fatima'
    ];

    // Randomly select a student from the list
    const randomStudent = students[Math.floor(Math.random() * students.length)];

    return randomStudent;
}

// Event listener for the capture button
captureButton.addEventListener('click', () => {
    // Simulate face recognition and attendance
    const recognizedStudent = recognizeFace();
    attendanceStatus.style.display = 'block';
    attendanceStatus.textContent = `Attendance marked for: ${recognizedStudent}`;
});

// Start webcam stream on page load
startWebcam();
