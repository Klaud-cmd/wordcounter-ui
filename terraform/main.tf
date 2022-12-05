resource "aws_s3_bucket" "bucket" {
  bucket = "wordcounter.klaud.com"
  acl    = "public-read"
}

resource "aws_s3_bucket_website_configuration" "bucket_website_config" {
  bucket = aws_s3_bucket.bucket.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}