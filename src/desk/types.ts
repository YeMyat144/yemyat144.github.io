import type { Project } from '../data/projects';
import type { Job } from '../data/experience';
import type { School } from '../data/education';
import type { Testimonial } from '../data/testimonials';

export type Selection =
  | { kind: 'project'; item: Project }
  | { kind: 'experience' }
  | { kind: 'education' }
  | { kind: 'testimonial'; item: Testimonial };

export type { Project, Job, School, Testimonial };
