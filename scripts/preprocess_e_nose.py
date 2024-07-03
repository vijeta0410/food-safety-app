# scripts/preprocess_e_nose.py
import pandas as pd

def preprocess_e_nose_data(input_file, output_file):
    df = pd.read_excel(input_file)
    # Add preprocessing steps here if necessary
    df.to_csv(output_file, index=False)

if __name__ == "__main__":
    preprocess_e_nose_data('data/e-nose/Molen_Dataset.xlsx', 'data/e-nose/preprocessed_e_nose.csv')
