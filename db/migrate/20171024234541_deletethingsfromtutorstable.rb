class Deletethingsfromtutorstable < ActiveRecord::Migration[5.1]
  def change
    remove_column :tutors_for_hires, :level, :integer
    add_column :tutors_for_hires, :first_tier, :boolean
    add_column :tutors_for_hires, :second_tier, :boolean
    add_column :tutors_for_hires, :third_tier, :boolean
  end
end
