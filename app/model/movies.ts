namespace app.model {

	export interface IMovie {
        id: string;
        poster_path: string;
        overview: string;
        title: string;
        tagline: string;
        budget: number;
        revenue: number;
        release_date: Date;
        popularity: number;
        vote_average: number;
        vote_count: number;
        original_title: string;
        original_language: string;
        backdrop_path: string;
    }
}
