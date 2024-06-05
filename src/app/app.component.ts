import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  //templateUrl: './app.component.html',
  template: `
    <form action="/submit_form" method="post">
      <label for="fname">First Name:</label><br>
      <input type="text" id="fname" name="fname" required><br><br>
      
      <label for="lname">Last Name:</label><br>
      <input type="text" id="lname" name="lname" required><br><br>
      
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" required><br><br>
      
      <label for="city">City:</label><br>
      <input type="text" id="city" name="city" required><br><br>

      <label for="state">State:</label><br>
      <input type="text" id="state" name="state" required><br><br>

      <label for="assetType">Desired Asset Type:</label><br>
        <input type="radio" id="auto" name="auto" value="Auto" required>
        <label for="auto">Auto</label><br>
        <input type="radio" id="home" name="home" value="Home" required>
        <label for="home">Home</label><br><br>

      <label for="creditScore">Credit Score:</label><br>
      <input type="number" id="creditScore" name="creditScore" min="300" max="850" required><br><br>

      <label for="maxPrice">Maximum Asset Price:</label><br>
      <input type="number" id="score" name="score" required><br><br>
      
      <label for="scoreType" required>FICO or Vantage Credit Score?</label><br>
        <input type="radio" id="fico" name="scoreType" value="fico" required>
        <label for="fico">FICO</label><br>
        <input type="radio" id="vantage" name="scoreType" value="vantage" required>
        <label for="vantage">Vantage</label><br><br>
      
      <input type="submit" value="Submit">
  </form>
`,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'AssetHunter';
}
