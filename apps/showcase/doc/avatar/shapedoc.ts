import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'avatar-shape-demo',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>Avatar comes in two different styles specified with the <i>shape</i> property, <i>square</i> is the default and <i>circle</i> is the alternative.</p>
        </app-docsectiontext>
        <div class="card flex justify-center gap-2">
            <p-avatar label="P" shape="circle" />
            <p-avatar label="T" />
        </div>
        <app-code [code]="code" selector="avatar-shape-demo"></app-code>
    `
})
export class ShapeDoc {
    code: Code = {
        basic: `<p-avatar label="P" shape="circle" />
<p-avatar label="T" />`,
        html: `<div class="card flex justify-center gap-2">
    <p-avatar label="P" shape="circle" />
    <p-avatar label="T" />
</div>`,
        typescript: `import { Component } from '@angular/core';
import { Avatar } from 'primeng/avatar';

@Component({
    selector: 'avatar-shape-demo',
    templateUrl: './avatar-shape-demo.html',
    standalone: true,
    imports: [Avatar]
})
export class AvatarShapeDemo {}`
    };
}
