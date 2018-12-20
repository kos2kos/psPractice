class CreateLocks < ActiveRecord::Migration[5.2]
  def change
    create_table :locks do |t|
      t.integer :house_id
      t.string :api_id
      t.boolean :locked

      t.timestamps
    end
  end
end
