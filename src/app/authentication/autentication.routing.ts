import { Routes, RouterModule} from '@angular/router';
import { AuthURL } from './authentication.url';
import { ComputerComponent } from './components/computer/computer.component';


const RouteLists: Routes = [
    {path: '', redirectTo: AuthURL.Computer, pathMatch: 'full'},
    {path: AuthURL.Computer, component: ComputerComponent}
];

export const AuthenticationRouting = RouterModule.forChild(RouteLists);
