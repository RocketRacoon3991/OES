import { Pipe, PipeTransform } from "@angular/core";
import { Ireport } from "../app/Model/Report";
import { IStudent } from './Model/Student';

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(report: IStudent[], SearchTerm: Number): IStudent[] {
    if (!report || !SearchTerm) {
      return report;
    }
    return report.filter((x) => x.RollNo == SearchTerm);
  }
}
