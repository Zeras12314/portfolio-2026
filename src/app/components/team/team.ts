import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {
  members = [
    { name: 'Alex Carter', role: 'Full Stack Developer', color: '#8b5cf6', initials: 'AC' },
    { name: 'Maya Brooks', role: 'UI/UX Engineer', color: '#3b82f6', initials: 'MB' },
    { name: 'Jordan Lee', role: 'DevOps Engineer', color: '#06b6d4', initials: 'JL' },
    { name: 'Sam Rivera', role: 'Backend Developer', color: '#ec4899', initials: 'SR' },
  ];
}
