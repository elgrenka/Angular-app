import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
    post: Post | undefined;

    constructor(
        private route: ActivatedRoute,
        private postsService: PostsService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const postId = +params['id'];
            this.postsService.getPostById(postId).subscribe(post => {
                this.post = post;
            });
        });
    }
}
