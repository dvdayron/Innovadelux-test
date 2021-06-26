import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wizard-example',
  templateUrl: './wizard-example.component.html',
  styleUrls: ['./wizard-example.component.scss']
})
export class WizardExampleComponent implements OnInit {

  userInfo: any = {
    image: '',
    name: '',
    lastName: '',
    email: '',
    phone: '',
    about: ''
  };

  currentStep: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  imagePreview(e) {
    const file = (e.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.userInfo.image = reader.result as string;
    }
    reader.readAsDataURL(file);
  }

  back(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  next(): void {
    // send information
    if (this.currentStep === 3 && this.validate()) {
      alert('Information sent successfully!!');
    }
    if (this.currentStep <= 2) {
      this.currentStep++;
    }
  }

  validate(): boolean {
    if (this.currentStep === 1) {
      return this.userInfo.image;
    }
    if (this.currentStep === 2) {
      return this.userInfo.name && this.userInfo.lastName && this.userInfo.email && this.userInfo.phone;
    }
    if (this.currentStep === 3) {
      return this.userInfo.about;
    }
    return false;
  }

}
