import { inject } from "@angular/core";
import { BaseService } from "../service/base.service";

export class TitleComponent  {
    protected readonly baseService = inject(BaseService);
    setTitle(item: string) {
        this.baseService.setTitle(item);
    }
}
