import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-skill-pill',
  templateUrl: './skill-pill.component.html',
  styleUrls: ['./skill-pill.component.scss'],
})
export class SkillPillComponent {
  @Input() skill: any;

  constructor(private doms: DomSanitizer) {}

  ngOnInit(): void {}

  myStyle(): object {
    let mySubString = this.skill.customStyles
      .replaceAll(`.skill-pill--${this.camelizeTitle(this.skill.title)}`, '')
      .replaceAll('.skill-pill', '')
      .replaceAll('{', '')
      .replaceAll('}', '');
    mySubString = `background-color: ${this.skill.color}; ${mySubString}`;

    return this.doms.bypassSecurityTrustStyle(mySubString);
  }

  camelizeTitle(str: string) {
    return (
      str
        .toLowerCase()
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
          return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, '') || 'skillTitle'
    );
  }
}
