import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  confirmBox() {
    Swal.fire({
      text: '250gr of the type of meat of your choice with vegetables and sauces',
      showCancelButton: true,
      confirmButtonText: 'Send',
      confirmButtonColor: '#FE8832', 
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Success!',
          'order has been confirmed',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Order has been cancelled',
          'error'
        )
      }
    })
  }
}
