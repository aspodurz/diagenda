import { Directive, forwardRef, inject, Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";
import { SecureStoreService } from "../service/store.service";
import { BaseService } from "../service/base.service";

@Directive({
  selector: '[planNameValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => PlanNameValidator),
      multi: true,
    },
  ],
})
export class PlanNameValidator implements AsyncValidator {
  private readonly storeService = inject(SecureStoreService);

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
      return this.storeService.validateName(control)
  }
}