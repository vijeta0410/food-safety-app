# scripts/preprocess_images.py
import os
import cv2
from pathlib import Path

def preprocess_images(image_dir, output_dir, class_labels):
    for label in class_labels:
        Path(os.path.join(output_dir, label)).mkdir(parents=True, exist_ok=True)
    
    for image_name in os.listdir(image_dir):
        image_path = os.path.join(image_dir, image_name)
        image = cv2.imread(image_path)
        if image is None:
            print(f"Warning: Couldn't read image at {image_path}")
            continue
        resized_image = cv2.resize(image, (128, 128))  # Resize to 128x128 pixels
        normalized_image = resized_image / 255.0  # Normalize to [0, 1]

        # Determine the class of the image (this should be replaced with actual logic)
        # Here, we are assuming image_name contains the class information
        if 'fresh' in image_name.lower():
            class_label = 'FRESH'
        elif 'half-fresh' in image_name.lower():
            class_label = 'HALF-FRESH'
        else:
            class_label = 'SPOILED'
        
        output_path = os.path.join(output_dir, class_label, image_name)
        cv2.imwrite(output_path, (normalized_image * 255).astype('uint8'))
        print(f"Processed and saved image to {output_path}")

if __name__ == "__main__":
    preprocess_images('data/images/raw', 'data/images/preprocessed', ['FRESH', 'HALF-FRESH', 'SPOILED'])
