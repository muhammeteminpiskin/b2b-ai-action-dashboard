export interface Review {
    id: number;
    brand_type: 'Kendi Ürünümüz' | 'Rakip';
    product_name: string;
    price: number;
    rating: number; // 1-5 arası yıldız
    review: string; // Müşteri yorumu
    date: string; // YYYY-MM-DD formatında
  }
  
  export interface AnalysisResult {
    product_id: number;
    sentiment: 'Olumlu' | 'Olumsuz' | 'Nötr';
    key_issues: string[]; // Tespit edilen kronik sorunlar
    action_suggestions: string[]; // Yapay zekanın önerdiği ticari aksiyonlar
  }