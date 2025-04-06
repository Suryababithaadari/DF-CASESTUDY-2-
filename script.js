// Show selected file name
document.getElementById('fileInput').addEventListener('change', function () {
    const fileInfo = document.getElementById('fileInfo');
    const file = this.files[0];
    if (file) {
      fileInfo.textContent = `Selected file: ${file.name} (${(file.size / (1024 * 1024)).toFixed(2)} MB)`;
    } else {
      fileInfo.textContent = 'No file selected.';
    }
  });
  
  // Reset file input
  function resetFile() {
    const fileInput = document.getElementById('fileInput');
    const fileInfo = document.getElementById('fileInfo');
    const reportBox = document.getElementById('report');
  
    fileInput.value = '';
    fileInfo.textContent = 'No file selected.';
    reportBox.textContent = 'No analysis yet.';
  }
  
  // Simulate file analysis
  function analyzeFile() {
    const fileInput = document.getElementById('fileInput');
    const reportBox = document.getElementById('report');
  
    if (!fileInput.files[0]) {
      alert('Please upload a file first.');
      return;
    }
  
    const fileName = fileInput.files[0].name;
    reportBox.innerHTML = `<strong>Analyzing ${fileName}...</strong><br><br>`;
  
    // Simulate a delay for analysis
    setTimeout(() => {
      reportBox.innerHTML = `
        <strong>Analysis Report:</strong><br>
        - File Name: ${fileName}<br>
        - File Type: ${fileInput.files[0].type || 'Unknown'}<br>
        - File Size: ${(fileInput.files[0].size / (1024 * 1024)).toFixed(2)} MB<br>
        - Status: <span style="color:green;">No threats detected</span><br>
      `;
    }, 2000);
  }
  